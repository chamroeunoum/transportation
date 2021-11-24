<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function sender(){
        return $this->hasOne('\App\Models\Sender','sender_id','id');
    }
    public function receiver(){
        return $this->hasOne('\App\Models\Receiver','receiver_id','id');
    }
    public function client(){
        return $this->hasOne('\App\Models\Client','client_id','id');
    }
}
