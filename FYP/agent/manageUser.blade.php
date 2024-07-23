<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ URL::asset('css/adminnavstyle.css'); }} ">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="{{ URL::asset('css/manageUser.css'); }} ">
</head>

<body>
    <header>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
        <div class="nav">
            <div class="sidebar">
                <a href="adminboard.html"><img src="../image/logo.png"></a>
                <ul>
                    <li><a href="./A_user.html"><i class="fas fa-user"></i>Manage User</a></li>
                    <li><a href="./A_menu_1.html"><i class="fas fa-pen"></i>Add Post</a></li>
                    <li><a href="./A_rewards_1.html"><i class="fas fa-file"></i>Manage Post</a></li>
                    <li><a href="/manageCategory" style="font-size: 13px;"><i class="fas fa-list"></i>Manage Category</a></li>
                    <li><form action="/adminLogout" class="inline" method="POST">
                        @csrf
                        <button type="submit">
                            <i class="fa-solid fa-door-closed">Logout</i>
                        </button>
                    </form></li>
                </ul>
            </div>
        </div>
    </header>
        
        <div class="content">
            <br><br>
            <h2>MANAGE USER </h2> 
            <br>
            <div class="search-bar">
            <form method="GET" action="{{ route('admin.manageUser') }}">
                <input type="text" name="search" placeholder="Search by username" value="{{ request()->get('search') }}">
                <button wire:click = "update"> <i class="fas fa-search"></i></button>
            </form>
        </div>
        @if($users->count()>0)
            <table>
                <thead>
                    <tr>
                        <th style="text-align: center">ID</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th style="text-align: center">Actions</th>
                    </tr>
                </thead>
                <tbody id="userTable">
                    @foreach($users as $user)
                    <tr>
                        <td style="text-align: center">{{$loop->iteration}}</td>
                        <td>
                            @if($user->profile)
                                <img class="image rounded-circle" src="{{ asset('storage/profile/' . $user->profile) }}" alt="Profile Picture" class="d-block ui-w-80" style="width: 80px; height: 80px; padding: 10px; border-radius: 50%; margin-right: 20px; object-fit: cover;">
                            @else
                                <img class="image rounded-circle" src="{{ asset('storage/profile/default.png') }}" alt="Default Profile Picture" class="d-block ui-w-80" style="width: 80px; height: 80px; padding: 10px; border-radius: 50%; margin-right: 20px; object-fit: cover;">
                            @endif
                        </td>
                        <td>{{$user->name}}</td>
                        <td>{{$user->email}}</td>
                        <td style="text-align: center">
                            <div>
                                <form action="{{route('users.destroy', $user->id)}}" method="POST" type="button" onsubmit="return confirm('Delete?')">
                                    @csrf
                                    @method('DELETE')
                                    <button class="delete">Delete</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
            @else
                        <h3 style="text-align: center; color: red">User not found!!!</h3>
                    @endif
        </div>

</body>

</html>
