<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Staff extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    protected $fillabe = ["firstname" , "lastname" , "phone" , "address" , "email" , "photo" , "salary" , "created_at" , "updated_at" ];
    
}
