<template>
  <PreLoader />
  <PreHeader />
  <CustomHeader />

  <div class="page-heading">
    <div class="container">
      <div class="row">
        <div class="align-self-center">
          <h4>関連リンク</h4>
          <p class="caption header-text">
            <template v-for="(linkItem, i) in links" :key="i">
              <h5>{{ linkItem.name }}</h5>
              <p>
                {{ linkItem.description }}<br />
                <a :href="linkItem.link">{{ linkItem.link }}</a>
              </p>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
  <SubPageContact />
  <CopyrightFooter />
</template>

<script setup>
import links from "@/contents/links.json"
useHead({
  title: "Kong Community, Japan / リンク",
})
</script>
