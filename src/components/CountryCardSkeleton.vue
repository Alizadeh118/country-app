<template>
  <div class="country-card">
    <div style="height: 250px">
      <v-skeleton
          type="react"
          width="100%"
          height="100%"
          animation="fade"
      />
    </div>

    <div class="country-card__content">
      <h2 class="country-card__name">
        <v-skeleton
            type="react"
            :width="150"
            :height="30"
            animation="wave"
        />
      </h2>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Population</span>
        <span class="country-card__meta_value">
          <v-skeleton
              type="react"
              :width="100"
              :height="20"
              animation="fade"
          />
        </span>
      </div>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Region</span>
        <span class="country-card__meta_value">
          <v-skeleton
              type="react"
              :width="100"
              :height="20"
              animation="fade"
          />
        </span>
      </div>

      <div class="country-card__meta">
        <span class="country-card__meta_title">Capital</span>
        <span class="country-card__meta_value">
          <v-skeleton
              type="react"
              :width="100"
              :height="20"
              animation="fade"
          />
        </span>
      </div>
    </div>
  </div>
</template>
