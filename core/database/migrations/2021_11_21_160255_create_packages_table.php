<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('from',191)->nullable(true);
            $table->string('to',191)->nullable(true);
            $table->text('note')->nullable(true);
            $table->float('weight')->default(0);
            $table->string('dimension',191)->default('');
            $table->integer('sender_id')->default(0);
            $table->integer('receiver_id')->default(0);
            $table->integer('client_id')->default(0);
            $table->string('sender_phone',191)->default("");
            $table->string('receiver_phone',191)->default("");
            $table->float('price')->default(0);
            $table->string('code',191)->default("");
            $table->integer('created_by')->default(0);
            $table->integer('updated_by')->default(0);
            $table->integer('deleted_by')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('packages');
    }
}
