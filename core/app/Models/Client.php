<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = ['id'];
    protected $fillable = ['firstname', 'lastname' , 'phone', 'address', 'email', 'photo' ];

    public function packages(){
        return $this->hasMany('\App\Models\Package','client_id','id');
    }

}
