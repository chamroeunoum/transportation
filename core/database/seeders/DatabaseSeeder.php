<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        \DB::table('users')->insert([
            'firstname' => "Chamroeun",
            'lastname' => "OUM",
            'email_verified_at' => \Carbon\Carbon::now()->format('Y-m-d H:i:s') ,
            'email' => 'chamroeunoum@gmail.com',
            'password' => bcrypt('1234567890+1'),
            // 'password' => bcrypt('1234567890+1'),
        ]);
    }
}
