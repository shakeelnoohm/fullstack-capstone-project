    .search-bar {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .search-bar .form-control {
        width: 75%; /* Adjust based on your design preference */
        margin-right: 1rem;
    }

    .search-bar .btn {
        width: 20%; /* Adjust based on your design preference */
    }

    .card {
        /* Use similar styles as in MainPage.css */
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        border-radius: 10px;
    }

    .card-body {
        padding: 1rem;
    }

    .card-footer {
        text-align: right;
        padding: 0.5rem 1rem;
        border-top: 1px solid #ddd;
    }

    .card-title {
        font-size: 1.2rem;
        color: #0056b3;
    }

    .card-text {
        color: #333;
        margin-bottom: 0.5rem;
    }

    .btn-info {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    .btn-info:hover {
        background-color: #138496;
        border-color: #117a8b;
    }

    .fas.fa-arrow-right {
        margin-left: 5px;
    }

    .card-img-top {
        width: 100%; /* Full width */
        height: 180px; /* Fixed height */
        object-fit: cover; /* Cover the entire area without stretching */
    }

    .card {
        transition: box-shadow 0.3s ease-in-out;
    }

    .card:hover {
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .card-body {
        padding: 1rem;
    }

    .card-footer {
        text-align: center;
        padding: 1rem;
        border-top: none;
    }

    .card-title {
        font-size: 1.2rem;
        color: #0056b3;
        margin-bottom: 0.5rem;
    }

    .card-text {
        color: #333;
    }

    .btn-primary {
        background-color: #009688; /* A shade of teal for a modern look */
        border: none;
    }

    .btn-primary:hover {
        background-color: #00796b; /* A darker shade of teal for hover state */
    }

    /* Responsive design for smaller screens */
    @media (max-width: 768px) {
        .search-bar .form-control,
        .search-bar .btn {
            width: 100%; /* Full width for small screens */
            margin-right: 0;
            margin-bottom: 0.5rem;
        }

        .search-bar .btn {
            width: auto; /* Auto width for button to fit content */
        }
    }