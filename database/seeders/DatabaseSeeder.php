<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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

        \App\Models\User::factory()->create([
            'name' => 'UnknownRori',
            'email' => 'UnknownRori@mail.test',
            'password' => 'UnknownRori'
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Kawaiikaze',
            'email' => 'Kawaiikaze@mail.test',
            'password' => 'Kawaiikaze',
        ]);
    }
}
