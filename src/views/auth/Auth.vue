<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 wrapper-auth">
        <h1>ini gambar hp</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          illum cupiditate quas officia ab delectus sit vero qui, ipsum
          corporis, esse et dolorum veniam in explicabo, error minus distinctio
          odit blanditiis voluptatum beatae aperiam. Et quos quae dignissimos
          tenetur ea qui sunt perferendis. Deleniti asperiores iure minima quasi
          eveniet similique odio assumenda cupiditate eum. Alias laboriosam
          quisquam eveniet quia? Porro exercitationem quia iure aperiam nisi,
          adipisci est eos soluta esse reiciendis mollitia dolore vitae nemo,
          sint veritatis neque corrupti veniam, excepturi id! Quos laudantium
          qui assumenda saepe? Odio optio aut natus vitae, deserunt illum totam
          praesentium quaerat repellat ea autem.
        </p>
      </div>
      <div class="col-6">
        <div class="wrapper-right">
          <!-- isi form -->
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
.wrapper-auth {
  background-image: url("../../assets/img/Mask Group.png");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.wrapper-right {
  padding: 20px 50px;
}
</style>
