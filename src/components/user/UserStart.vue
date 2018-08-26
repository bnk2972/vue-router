<template>
    <div>
        <p>Please select a user</p>
        <hr>
        <ul class="list-group">
            <router-link 
                class="list-group-item" 
                tag="li"
                to="/user/1"
                style="cursor: pointer">User 1</router-link>
            <router-link 
                class="list-group-item" 
                tag="li"
                to="/user/2"
                style="cursor: pointer">User 2</router-link>
            <router-link 
                class="list-group-item" 
                tag="li"
                to="/user/3"
                style="cursor: pointer">User 3</router-link>
        </ul>
    </div>
</template>
