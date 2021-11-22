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
                <!--<FaIcon >search</FaIcon>-->
                Pesquisar
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
            user: ''
        })
    }
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        //height: 100vh;
        align-items: center;

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