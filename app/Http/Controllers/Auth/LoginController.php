<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $validated = $request->validated();

        if (Auth::attempt($validated)) {
            return response()->json([
                'status' => 200,
                'token' => auth()->user()->createToken('user')->plainTextToken,
                'user' => new UserResource(auth()->user()),
            ]);
        }

        return response()->json([
            'status' => 400,
            'message' => 'Authentication failed!',
        ], 400);
    }
}
