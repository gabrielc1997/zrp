<?php

//imagem destacada
    add_theme_support('post-thumbnails');


// post types

function meus_posts_types() {
    // titulo
    register_post_type('titulo',
    array(
        'labels' => array(
            'name'               => __('titulos'),
            'singular_name'      => __('titulo'),
        ),
        'public'                 => true,
        'has_archive'            => true,
        'menu_icon'              => 'dashicons-arrow-up-alt',
        'supports'               => array('title', 'editor', 'thumbnail', 'page-attributes'),
    )
    );
}
add_action('init', 'meus_posts_types');