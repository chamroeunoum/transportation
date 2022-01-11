<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterPackagesAddColumnTotalPackages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('packages')) {
            if (!Schema::hasColumn('packages', 'total_packages')) {
                Schema::table('packages',function(Blueprint $table){
                    $table->integer('total_packages')->nullable(true);
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
