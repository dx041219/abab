<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ URL::asset('css/adminnavstyle.css') }}">
    <link rel="stylesheet" href="{{ URL::asset('css/editCategory.css') }}">
    <title>Edit Category</title>
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
                    <li><a href="./A_rewards_1.html" style="font-size: 13px;"><i class="fas fa-list"></i>Manage Category</a></li>
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
        <h1>Edit Category</h1>
    
        <form id="categoryForm" action="{{ route('admin.categories.update', $category) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')

            <label for="categoryImage">Image:</label>
            <input type="file" id="categoryImage" name="categoryImage" accept="image/*"><br><br>

            <label for="categoryTitle">Title:</label>
            <input type="text" id="categoryTitle" name="categoryTitle" value="{{ $category->title }}" required><br><br>
            
            <button type="submit" class= "editbtn">Edit Category</button>
        </form>
    </main>

</body>
</html>
