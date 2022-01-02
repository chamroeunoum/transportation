<?php
namespace App\Http\Controllers\Api\Transportation;

use App\Models\Staff AS RecordModel;
use App\Http\Controllers\Controller;
use App\Http\Controllers\CrudController;
use Illuminate\Http\Request;

class StaffController extends Controller
{
    /**
     * Listing packages
     */
    public function index(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id', "firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at"  ]);
        return response()->json([
            'records' => $crud->pagination(true,$crud->getListBuilder() ) ,
            'message' => 'Listing ready.'
        ],200);
    }
    /**
     * Read package
     */
    public function read(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id', "firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at"  ]);
        if( ($record = $crud->read() ) ){
            return response()->json([
                'record' => $record ,
                'message' => 'No data found.'
            ],200);
        }
        return response()->json([
            'record' => $request->id ,
            'message' => 'No data found.'
        ],412);
    }
    /**
     * Create package
     */
    /**
     * Create package
     */
    public function create(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id' ,'email','username' ,'firstname' ,'lastname' ,'phone' ,'avatar_url' ,"member_id" ,"active" ,"created_at" ,"updated_at" ,"deleted_at"]);
        if( ( $record = $crud->create() ) ){
            return response()->json([
                'record' => $record ,
                'message' => 'បញ្ញើរបានរក្សារទុក.'
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
        $crud = new CrudController( new RecordModel, $request , [ 'id', "firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at"  ]);
        if( ( $record = $crud->update() ) ){
            return response()->json([
                'record' => $record,
                'message' => 'បញ្ញើរបានរក្សារទុក.'
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
        $crud = new CrudController( new RecordModel, $request , [ 'id', "firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at"  ]);
        if( ($record = $crud->read() ) ){
            if( $crud->delete() ){
                return response()->json([
                    'record' => $record ,
                    'message' => 'Matched data has been deleted.'
                ],200);
            }
            return response()->json([
                'record' => null ,
                'message' => 'There is something wrong while deleting data.'
            ],412);
        }
        return response()->json([
            'record' => null ,
            'message' => 'No data found for deleting.'
        ],412);
    }
    /**
     * Compact list
     */
    public function compact(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'id', "firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at"  ]);
        return response()->json([
            'records' => $crud->getRecords() ,
            'message' => 'Compact listing ready.'
        ],200);
    }
}
