<template>
    <div>
        <h3>Some User Detail</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link 
            tag="button" 
            class="btn btn-default" 
            :to="link">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (true) {
                next();
            } else {
                next(false);
            }
            // next(vm => {
            //     vm.link;
            // });
        }
    }
</script>
