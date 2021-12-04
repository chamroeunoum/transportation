<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    protected $fillable = ['note','weight','dimension','sender_id','receiver_id','sender_phone','receiver_phone','price','code', 'from','to','created_at','updated_at','created_by','updated_by'];

    /**
     * Relationships
     */
    public function sender(){
        return $this->hasOne(\App\Models\User::class,'sender_id','id');
    }
    public function receiver(){
        return $this->hasOne(\App\Models\User::class,'receiver_id','id');
    }
    public function client(){
        return $this->hasOne(\App\Models\User::class,'client_id','id');
    }
    public function author(){
        return $this->hasOne(\App\Models\User::class,'created_by','id');
    }
    public function editor(){
        return $this->hasOne(\App\Models\User::class,'updated_by','id');
    }
    public function destroyer(){
        return $this->hasOne(\App\Models\User::class,'deleted_by','id');
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
}
