<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->increments('id');
            $table->string('firstname', 191)->nullable(false);
            $table->string('lastname', 191)->nullable(true);
            $table->string('phone', 191)->nullable(true);
            $table->string('address', 191)->nullable(true);
            $table->string('email', 191)->nullable(true);
            $table->string('photo', 191)->nullable(true);
            $table->string('salary',50)->nullable(true);
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
        Schema::dropIfExists('staff');
    }
}
