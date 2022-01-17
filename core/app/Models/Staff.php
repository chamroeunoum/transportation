<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Branch;

class Staff extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    protected $fillabe = ["firstname" ,'branch_id', "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at" ];
 
    /**
     * Get the branch that owns the Staff
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function branch()
    {
        return $this->belongsTo(Branch::class, 'branch_id','id');
    }
    
}
