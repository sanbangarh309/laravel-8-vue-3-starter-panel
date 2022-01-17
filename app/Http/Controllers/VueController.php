<?php

namespace App\Http\Controllers;

class VueController extends Controller
{
    /**
     * Get the Vue view.
     */
    public function __invoke()
    {
        return view('app');
    }
}
