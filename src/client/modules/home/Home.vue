<template>
    <div class="content">
        <div class="header">
            <h1>
                Music Board
            </h1>
            <h2>
                <span>See</span> what you hear
            </h2>
        </div>
        <div class="search">
            <input
                    class="searchInput"
                    type="text"
                    v-model="user"
                    placeholder="Insira um usuário"
            >
            <router-link
                    :to="`/user/${user}`"
                    :disabled="user"
                    class="searchButton"
            >
                <FaIcon >search</FaIcon>
            </router-link>
        </div>
    </div>
</template>

<script>
    import FaIcon from "../../components/FaIcon.vue";
    export default {
        name: "Home",
        components: {FaIcon},
        data: () => ({
            user: '',
            mounted: false
        }),
        mounted() {
            this.mounted = true;
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        width: fit-content;
        min-height: 300px;
        margin: auto;
        align-items: center;
        border-radius: 10px;
        border: 2px solid #1c2f34;
        background-color: #273e42;
        box-shadow: 0 0 20px black;
        padding: 0 40px;
        justify-content: space-evenly;

        .header {
            display: flex;
            flex-direction: column;
            align-items: center;

            h1, h2 {
                margin: 0 0 0.5em 0;
            }

            span {
                color: yellow;
            }
        }

        .search {
            font-size: 1em;

            .searchInput, .searchButton {
                font-size: inherit;
                box-sizing: content-box;
                padding: 0.3em;
            }

            .searchInput {
                border-radius: 5px 0 0 5px;
                border: none;
            }

            .searchButton {
                background-color: #d92323;
                color: white;
                border-radius: 0 5px 5px 0;
                text-decoration: none;
                transition: 0.3s;

                &:hover {
                    background-color: #f71414;
                    cursor: pointer;
                }
            }
        }
    }
</style>