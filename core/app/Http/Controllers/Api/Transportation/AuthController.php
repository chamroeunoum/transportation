<?php

namespace App\Http\Controllers\Api\Transportation;

use App\Models\User;
use Carbon\Carbon;
use Lcobucci\JWT\Parser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;


class AuthController extends Controller
{
    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        $credentials = request(['email', 'password']);
        $credentials['active'] = 1;
        $credentials['deleted_at'] = null;

        if (!Auth::attempt($credentials)) {
            // if (!auth()->attempt($data)) {
            //     return response(['error_message' => 'Incorrect Details. Please try again']);
            // }
            $user = User::where('email', $request->email)->limit(1)->first() ;
            if ( $user != null ){ 
                /**
                 * Account is disabled
                 */
                if( $user->active != 1 ){
                    return response()->json([
                        'record' => false ,
                        'message' => 'គណនីត្រូវបានបិទ។'
                    ], 201);
                }
                /**
                 * Account does exist but the password might miss type
                 */
                if( $user->email_verified_at == "" ) {
                    
                    return response()->json([
                        'record' => false ,
                        'message' => 'អ្នកមិនទាន់បានបញ្ជាក់ អំពីការចុះឈ្មោះនៅឡើយ។ សូមបញ្ចាក់ការចុះឈ្មោះរបស់អ្នកជាមុនសិន។'
                    ], 201);
                }
                if( $user->deleted_at != null ) {
                    
                    return response()->json([
                        'record' => false ,
                        'message' => 'គណនីនេះត្រូវបានដកចេញពីប្រព័ន្ធ។'
                    ], 201);
                }

                return response()->json([
                    'record' => false ,
                    'message' => 'ពាក្យសម្ងាត់របស់អ្នកមិនត្រឹមត្រូវហើយ។'
                ], 201);
                
            } else {
                /**
                 * Account does exist but the password might miss type
                 */
                return response()->json([
                    'record' => false ,
                    'message' => 'អ៊ីមែលរបស់អ្នកមិនមានក្នុងប្រព័ន្ធឡើយ !'
                ], 401);
            }
        }

        /**
         * Get authenticated user
         */
        $user = $request->user(); 
        /**
         * Fetching the detail information of the account and the branch that it is in
         */
        if( $user->staff && $user->staff->branch_id > 0 ){
            $user->staff->branch;
        }

        /**
         * Create token for authenticated user
         */
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addDay();
        $token->save();

        /**
         * Re-fetching the user 
         */
        $user = Auth::user();
        if ($user) {
            if (Storage::disk(env('STORAGE_DRIVER','public'))->exists($user->avatar_url)) {
                $user->avatar_url = Storage::disk(env('STORAGE_DRIVER','public'))->url($user->avatar_url);
            }
            else{
                $user->avatar_url = null ;
            }
        }

        // Load the detail information of the account (user)
        $user->staff;

        return response()->json([
            'token' => [
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ],
            'user' => $user,
            'message' => 'ចូលប្រើប្រាស់បានជោគជ័យ !'
        ], 200);

    }
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        if( $request->user() != null ){
            $value = $request->bearerToken();
            if ($value) {
                // $id = (new Parser())->parse($value)->getHeader('jti');
                // $token = $request->user()->tokens()->find($id);
                // $token->revoke();
                $request->user()->token()->revoke();
                return response()->json([
                    'record' => false ,
                    'message' => 'អ្នកបានចាកចេញដោយជោគជ័យ !'
                ], 200);
            }
            return response()->json([
                'record' => false ,
                'message' => 'មានបញ្ហាជាមួយ Access Token !'
            ], 201);
        }
        Auth::logout();
        return response()->json([
            'record' => Auth::user() ,
            'message' => 'អ្នកបានចាកចេញរួចហើយ!'
        ], 200);
    }
}
