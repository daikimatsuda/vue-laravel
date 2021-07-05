<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-10">
                <form>
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label mr-5">ID</label>
                        <input type="text" class="col-sm-8 form-control-plaintext" readonly id="id" v-model="task.id">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label mr-5">Title</label>
                        <input type="text" class="col-sm-8 form-control-plaintext" readonly id="title" v-model="task.title">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label mr-5">Content</label>
                        <input type="text" class="col-sm-8 form-control-plaintext" readonly id="content" v-model="task.content">
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="person-in-charge" class="col-sm-3 col-form-label mr-5">Person In Charge</label>
                        <input type="text" class="col-sm-8 form-control-plaintext" readonly id="person-in-charge" v-model="task.person_in_charge">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskId: {
              type: Number
            }
        },
        data: function () {
          return {
            task: {}
          }
        },
        methods: {
          getTask() {
              this.$axios.get('/api/tasks/' + this.taskId)
                .then((res) => {
                    this.task = res.data;
                });
          }
        },
        mounted() {
          this.getTask();
        }
    }
</script>