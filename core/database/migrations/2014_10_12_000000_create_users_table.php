<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username', 191)->nullable(true);
			$table->string('firstname', 191)->nullable(true)->comment('firstname of the user');
			$table->string('lastname', 191)->nullable(true)->comment('firstname of the user');
			$table->string('phone', 50)->nullable(true);
			$table->string('email', 191)->nullable(true);
			$table->string('avatar_url',191)->nullable(true);
			$table->string('password', 191)->nullable(true);
			$table->string('remember_token', 100)->nullable();
			$table->string('forgot_password_token', 100)->nullable();
			$table->string('forgot_password_code', 100)->nullable();
			$table->string("facebook_user_id",191)->nullable(true)->comment("facebook_id -> facebook user_id");
			$table->string("google_user_id",191)->nullable(true)->comment("google_user_id -> google user_id");
			$table->string("apple_user_id",191)->nullable(true)->comment("apple_user_id -> apple user_id");
			$table->string('email_verified_at',191)->nullable(true)->comment('Date of the account to be verified by email');
			$table->string('member_id', 50)->nullable(true);
			$table->boolean('active')->default(false);
			$table->integer('activation_method')->nullable(true)->comment('0 => phone, 1 => email');
			$table->string('activation_code')->nullable(true)->comment('Field to store the 6 digits for activation of user account');
			$table->string('activation_token')->nullable(true)->comment('Field to store the token for activation of user account');
			$table->timestamps();
			$table->softDeletes()->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
