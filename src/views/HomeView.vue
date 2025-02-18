<script setup>
import { useRoute, useRouter } from "vue-router";
import Form from "../components/test/Form.vue"
import Alert from "@/components/test/Alert.vue";

const route = useRoute()
const router = useRouter()
console.log(route);


</script>

<template>

  <main class="home w-full min-h-screen ">
    <h1 class="text-2xl underline text-center font-bold ">Home Page </h1>
    <Form />

    <div class="grid grid-cols-4 ">
      <div class="col-span-2 col-start-2 ">
        <Alert message="testing success" :status="true" class='my-3'>
          <template #desc>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illo eos dolorem?</p>
          </template>
        </Alert>
        <Alert message="fail alert" :status="false" class='my-3' />
        <Alert message="fail alert" :status="false" class='my-3' />
      </div>
    </div>
  </main>

</template>
