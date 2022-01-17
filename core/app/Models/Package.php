<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Branch;

class Package extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];
    protected $fillable = ['note','branch_id','weight','dimension','sender_id','receiver_id','client_id','sender_phone','payment_status', 'receiver_phone','price','code', 'from','to','created_at','updated_at','created_by','updated_by','total_packages'];
    protected $casts = [
        'dimension' => 'array'
    ];

    /**
     * Relationships
     */
    public function sender(){
        return $this->belongsTo(\App\Models\Client::class,'sender_id','id');
    }
    public function receiver(){
        return $this->belongsTo(\App\Models\Client::class,'receiver_id','id');
    }
    public function client(){
        return $this->belongsTo(\App\Models\Client::class,'client_id','id');
    }
    public function author(){
        return $this->belongsTo(\App\Models\User::class,'created_by','id');
    }
    public function editor(){
        return $this->belongsTo(\App\Models\User::class,'updated_by','id');
    }
    public function destroyer(){
        return $this->belongsTo(\App\Models\User::class,'deleted_by','id');
    }
    /**
     * Get the branch that owns the Staff
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id','id');
    }
    /**
     * Functions
     */
    /**
     * Count total package's income by day
     */
    /**
     * Count total package's income by month
     */
    /**
     * Count total package's income by term
     */
    /**
     * Count total package's income by semester
     */
    /**
     * Count total package's income by quater
     */
    /**
     * Count total package's income by year
     */
    
    public static function boot()
    {
        parent::boot();
        static::creating(function($model) {
            $model->created_by = $model->updated_by = \Auth::user() ? \Auth::user()->id : 0 ;
        });
        static::updating(function($model) {
           $model->updated_by = \Auth::user() ? \Auth::user()->id : 0 ;
        });
        static::deleting(function($model) {
            $model->deleted_by = \Auth::user() ? \Auth::user()->id : 0 ;
        });
    }
}
