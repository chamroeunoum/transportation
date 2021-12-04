<?php

namespace App\Http\Controllers\Api\Transportation;

use App\Http\Controllers\Controller;
use App\Http\Controllers\CrudController;
use Illuminate\Http\Request;
use App\Models\Package as RecordModel ;

class PackageController extends Controller
{
    /**
     * Listing packages
     */
    public function index(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
        return response()->json([
            'records' => $crud->pagination(true,$crud->getListBuilder() ) ,
            'message' => 'Listing ready.'
        ],200);
    }
    /**
     * Read package
     */
    public function read(Request $request){
        $crud = new CrudController( new RecordModel, $request , [ 'note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
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
    public function create(Request $request){
        $request->merge(['code'=> "SCTN".\Carbon\Carbon::now()->format('YmdHis') ]);
        $crud = new CrudController( new RecordModel, $request , [ 'note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
        if( ( $record = $crud->create() ) ){
            $record->code = "SCTN".\Carbon\Carbon::now()->format('YmdHis'); 
            $record->save();
            return response()->json([
                'record' => $crud->formatRecord( $record ) ,
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
        $crud = new CrudController( new RecordModel, $request , [ 'note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
        if( ( $record = $crud->update() ) ){
            return response()->json([
                'record' => $crud->formatRecord( $record ) ,
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
        $crud = new CrudController( new RecordModel, $request , [ 'note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
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
        $crud = new CrudController( new RecordModel, $request , [ 'weight','dimension','sender_phone','receiver_phone','price','code', 'from','to', 'created_at','updated_at','created_by','updated_by','deleted_by' ]);
        return response()->json([
            'records' => $crud->getRecords() ,
            'message' => 'Compact listing ready.'
        ],200);
    }
}
