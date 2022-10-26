<template>
  <div class="country">

    <div class="country__image">
      <v-skeleton
          type="react"
          width="100%"
          height="100%"
      />
    </div>

    <div class="country__content">
      <h1 class="country__name">
        <v-skeleton
            type="react"
            :width="200"
            :height="40"
            animation="wave"
        />
      </h1>

      <div class="country__metas">

        <div class="country__meta">
          <span class="country__meta_title">Native Name</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Population</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Region</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Sub Region</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Capital</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Top Level Domain</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Currencies</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>

        <div class="country__meta">
          <span class="country__meta_title">Languages</span>
          <span class="country__meta_value">
            <v-skeleton
                type="react"
                :width="100"
                :height="20"
                animation="fade"
            />
          </span>
        </div>
      </div>
      <div
          class="country__borders"
      >
        <div class="country__borders_title">
          Border Countries
        </div>
        <div class="country__borders_value">
          <v-skeleton
              v-for="n in 4"
              :key="n"
              type="react"
              :width="100"
              :height="30"
              animation="fade"
          />
        </div>
      </div>
    </div>
  </div>
</template>
