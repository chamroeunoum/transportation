<?php

namespace App\Http\Controllers\Api\Transportation;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CrudController;
use Illuminate\Http\Request;
use App\Models\User as RecordModel ;

class UserController extends Controller
{
    /**
     * Listing packages
     */
    public function index(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        $responseMessage = $crud->pagination(true,$crud->getListBuilder() ) ;
        $responseMessage['message'] = 'អានព័ត៌មានរួចរាល់';
        return response()->json( $responseMessage ,200);
    }
    /**
     * Read package
     */
    public function read(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        if( ($record = $crud->read() ) ){
            return response()->json([
                'record' => $record ,
                'message' => 'អានព័ត៌មានរួចរាល់'
            ],200);
        }
        return response()->json([
            'record' => $request->id ,
            'message' => 'មិនមានព័ត៌មានឡើយ'
        ],412);
    }
    /**
     * Change password
     */
    public function changePassword(Request $request){
        if( ( $user = \App\Models\User::find($request->id) ) !== null ){
            $user->password = bcrypt( $request->password );
            $user->save();
            return response()->json([
                'record' => $user ,
                'message' => 'ផ្លាស់ប្ដូរពាក្យសម្ងាត់រួចរាល់'
            ],200);
        }
        return response()->json([
            'record' => $request->id ,
            'message' => 'មិនមានព័ត៌មានឡើយ'
        ],412);
    }
    /**
     * Create package
     */
    public function create(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username', 'password','firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        if( ( $record = $crud->create() ) ){
            $record->password = bcrypt( $request->password );
            $record->active = 1 ;
            $record->save();
            return response()->json([
                'record' => $record ,
                'message' => 'បានរក្សារទុករួចរាល់.'
            ],200);
        }
        return response()->json([
            'record' => null ,
            'message' => 'There is problem while saving data.'
        ],412);
    }
    /**
     * Update package
     */
    public function update(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        if( ( $record = $crud->update() ) ){
            return response()->json([
                'record' => $record,
                'message' => 'បានកែប្រែរួចរាល់.'
            ],200);
        }
        return response()->json([
            'record' => null ,
            'message' => 'There is problem while updating data.'
        ],412);
    }
    /**
     * Delete package
     */
    public function delete(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        if( ($record = $crud->read() ) ){
            if( $crud->delete() ){
                return response()->json([
                    'record' => $record ,
                    'message' => 'បានលុបព័ត៌មានរួចរាល់'
                ],200);
            }
            return response()->json([
                'record' => null ,
                'message' => 'មានកំហុសក្នុងពេលលុបព័ត៌មាន'
            ],412);
        }
        return response()->json([
            'record' => null ,
            'message' => 'មិនមានព័ត៌មានដើម្បីលុបឡើយ'
        ],412);
    }
    /**
     * Compact list
     */
    public function compact(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        return response()->json([
            'records' => $crud->getRecords() ,
            'message' => 'អានព័ត៌មានរួចរាល់'
        ],200);
    }
}
