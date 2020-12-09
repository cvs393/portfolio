<template>
    <div class="entry_github">
        <section v-for="project in projects" :key="project.name">
            <div class="desc">{{project.desc}}</div>
        </section>
    </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
import axios from "axios";

export default{
    components: {
        Fragment
    }, data: function() {
        return {
            projects: []
        }
    },

    mounted()
    {
        axios.get("https://api.github.com/users/cvs393/repos")
        .then(response => {
            console.log(response)
            response.data.forEach(project => {
                console.log(project.name)
                if(project.stargazers_count >0) {
                    var project_entry = {}
                    project_entry.name = project.name;
                    project_entry.desc = project.description;
                }
            })
            .catch(error => {
                console.log(error.response)
            })
        })
    }
    
}


// Send the request to the server
//request.send();
// Call function passing in my name as GitHub username
//requestUserRepos('cvs393');

</script>

<style scoped>
    .entry_github {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>