<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterClientAddColumnCommissionId extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('clients')) {
            if ( !Schema::hasColumn('clients', 'commission_id') ) {
                Schema::table('clients',function(Blueprint $table){
                    $table->integer('commission_id')->nullable(true);
                });
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
