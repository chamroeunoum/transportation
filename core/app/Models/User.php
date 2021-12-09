<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username' ,
        'active' ,
        'firstname' ,
        'lastname' ,
        'phone' ,
        'avatar_url' ,
        "forgot_password_token" ,
        "forgot_password_code" ,
        "facebook_user_id" ,
        "google_user_id" ,
        "apple_user_id" ,
        "email_verified_at" ,
        "member_id" ,
        "active" ,
        "activation_method" ,
        "activation_code" ,
        "activation_token" ,
        "created_at" ,
        "updated_at" ,
        "deleted_at" ,
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
