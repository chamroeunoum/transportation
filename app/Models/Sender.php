<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sender extends Model
{
    use HasFactory;

    public function packages(){
        return $this->hasMany('\App\Models\Package','sender_id','id');
    }

}
