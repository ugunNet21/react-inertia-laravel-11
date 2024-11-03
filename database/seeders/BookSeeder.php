<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BookSeeder extends Seeder
{
    public function run($count = 100)
    {
        $faker = Faker::create();

        for ($i = 0; $i < $count; $i++) {
            Book::updateOrCreate(
                [
                    'title' => $faker->sentence(3), // Generates a title with 3 words
                    'author' => $faker->name,       // Generates a random author name
                ],
                [
                    'title' => $faker->sentence(3),
                    'author' => $faker->name,
                ]
            );
        }
    }
}
