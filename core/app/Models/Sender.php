<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sender extends Model
{
    use HasFactory, SoftDeletes;

    public function packages(){
        return $this->hasMany('\App\Models\Package','sender_id','id');
    }

}
