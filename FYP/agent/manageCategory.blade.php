<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ URL::asset('css/adminnavstyle.css'); }}">
    <link rel="stylesheet" href="{{ URL::asset('css/manageUser.css'); }}"> <!-- Use the same CSS for overall layout -->
    <link rel="stylesheet" href="{{ URL::asset('css/manageCategory.css'); }}"> <!-- Specific CSS for category layout -->
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Manage Category</title>
</head>
<body>
    <header>
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

    <main>
        <div class="content">
            <h2>MANAGE CATEGORY</h2>

            <div class="search-add-container">
                <div class="search-bar">
                    <form method="GET" action="{{ route('admin.manageCategory') }}">
                        <input type="text" name="search" placeholder="Search by category" value="{{ request()->get('search') }}">
                        <button wire:click="update"><i class="fas fa-search"></i></button>
                    </form>
                </div>
                <button class="add" onclick="window.location.href='/addCategory'">Add Category</button>
            </div>

            @if($categories->count() > 0)
                <div class="border-container">
                    @foreach($categories as $category)
                        <div class="border">
                            @if (Str::startsWith($category->image, ['http://', 'https://']))
                                <img src="{{ $category->image }}" alt="">
                            @else
                                <img src="{{ asset('storage/' . $category->image) }}" alt="">
                            @endif
                            <div>
                                <h3>{{ $category->title }}</h3>
                            </div>
                            <div class="bu">
                                <button class="edit" onclick="window.location.href='{{ route('admin.categories.edit', $category) }}'">Edit</button>
                                <form action="{{route('admin.categories.destroy', $category->id)}}" method="POST" type="button" onsubmit="return confirm('Delete?')">
                                    @csrf
                                    @method('DELETE')
                                    <button class="delete">Delete</button>
                                </form>
                            </div>
                        </div>
                    @endforeach
                </div>
            @else
                <h3 style="text-align: center; color: red">Category not found!!!</h3>
            @endif
        </div>
    </main>
</body>
</html>
