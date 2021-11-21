<template>
    <div class="album">
        <img :src="album.image[2]['#text']" :alt="album.name">
        <div class="albumInfo">
            <div class="albumName">
                {{album.name}}
            </div>
            <div class="albumArtist">
                {{album.artist.name}}
            </div>
            <div class="playCount">
                {{album.playcount}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlbumView",
        data: () => ({

        }),
        props: {
            album: {
                type: Object,
                required: 'true'
            },
        },
    }
</script>

<style lang="scss" scoped>
    .album {
        --size: 170px;

        position: relative;

        width: var(--size);
        height: var(--size);

        .albumInfo {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;

            opacity: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: linear-gradient(0deg, rgba(0,0,0,.80) 0%, rgba(0,0,0,0) 100%);

            font-size: 0.7em;
            //text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;

            &:hover {
                opacity: 1;
                transition: opacity 0.5s;
            }

            .albumName, .albumArtist {
                color: white;
                padding: 0px 0px 3px 3px;
            }

            .playCount {
                position: absolute;
                right: 0;
                top: 0;

                padding: 3px 6px;
            }
        }

        img {
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            cursor: pointer;
            filter: drop-shadow(0 0 5px black);
            transform: scale(1.1);
            z-index: 5;
            transition: filter 0.3s, transform 0.1s;
        }
    }
</style>