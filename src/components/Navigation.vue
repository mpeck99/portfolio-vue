<template>
  <button class="hamburger-menu" @click="menuOpenClose">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav class="main-nav" aria-label="Navigation">
    <ul>
      <li>
        <router-link to="/" @mouseover="checkForActive">Home</router-link>
      </li>
      <li>
        <router-link to="/about" @mouseover="checkForActive">About</router-link>
      </li>
      <li>
        <router-link to="/portfolio" @mouseover="checkForActive"
          >Portfolio</router-link
        >
      </li>
      <li>
        <router-link to="/movies" @mouseover="checkForActive"
          >Movies</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    menuOpenClose: function() {
      const nav = document.querySelector('.main-nav'),
        body = document.querySelector('body'),
        menu = document.querySelector('.hamburger-menu');

      if (nav.classList.contains('js-open')) {
        menu.classList.add('js-close');
        nav.classList.add('js-close');
        setTimeout(() => {
          nav.classList.remove('js-open');
          menu.classList.remove('js-open');
          menu.classList.remove('js-close');
          nav.classList.remove('js-close');
          body.classList.remove('js-open');
        }, 450);
      } else {
        nav.classList.add('js-open');
        body.classList.add('js-open');
        menu.classList.add('js-open');
      }
    },

    checkForActive: function() {
      const activeItem = document.querySelector('.active');

      activeItem.parentNode.classList.add('active');
      setTimeout(() => {
        activeItem.parentNode.classList.remove('active');
      }, 500);
    }
  }
};
</script>

<style lang="scss">
.main-nav {
  display: none;

  font-family: $main;
  font-size: 1rem;
  font-weight: 700;

  a,
  &:visited {
    padding: 0.25rem;

    color: $turquoise;
    text-decoration: none;

    &.active {
      border-bottom: 0.25rem solid $coral;
    }
  }

  ul {
    display: flex;

    li {
      margin: 0 2rem;

      list-style: none;

      &:hover,
      &:focus {
        transform: translateY(-0.5rem);
        transition: 0.5s ease;

        a {
          color: $navy;
        }
      }
    }
  }

  &.js-open {
    height: 100%;
    width: 100%;

    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;

    background-color: $turquoise;

    overflow: hidden;
    animation: slideDown 0.5s ease-in-out;

    ul {
      height: 100%;

      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      padding: 0;
      margin: 0;

      font-size: 2rem;
    }
    a {
      color: $navy;
      border-bottom-color: $coral;
    }
  }

  &.js-close {
    animation: slideUp 0.5s ease-in-out;
  }

  @include tablet {
    display: block;

    grid-row: 1 / 2;
    grid-column: 2 / 3;

    justify-self: flex-end;
  }
}

.hamburger-menu {
  display: block;

  margin-right: 1rem;
  margin-top: 1rem;
  border: none;
  outline: none;

  span {
    height: 0.25rem;
    width: 2.5rem;

    margin-bottom: 0.5rem;

    display: block;
    position: relative;

    background-color: $turquoise;

    &:after {
      content: '';

      width: 0;
      height: inherit;

      position: absolute;
      bottom: 0;
      left: 0;

      background-color: $turquoise;
    }
  }

  &:hover {
    span {
      &:after {
        width: 100%;

        background-color: $coral;

        transition: 0.2s;
      }
      &:nth-of-type(2) {
        &:after {
          transition-delay: 0.1s;
        }
      }

      &:nth-of-type(3) {
        &:after {
          transition-delay: 0.2s;
        }
      }
    }

    &.js-open {
      span {
        &:after {
          width: 100%;
          transition: 0.2s;
        }
        &:nth-of-type(2) {
          &:after {
            transition-delay: 0.1s;
          }
        }

        &:nth-of-type(3) {
          &:after {
            transition-delay: 0.2s;
          }
        }
      }
    }

    &.js-close {
      span {
        &:after {
          width: 0;

          background-color: $turquoise;
        }
      }
    }
  }

  &.js-open {
    z-index: 2;

    span {
      background-color: $navy;

      &:nth-child(1) {
        transform: rotate(45deg);
        transition: ease-in 0.2s;
      }
      &:nth-child(2) {
        display: none;
        transition: ease-in 0.2s;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(9px, -9px);
        transition: ease-in 0.2s;
      }
    }
  }

  &.js-close {
    span {
      background-color: $navy;

      &:nth-child(1) {
        transform: rotate(0deg);
        transition: ease-in 0.2s;
      }
      &:nth-child(2) {
        display: block;
        transition: ease-in 0.2s;
      }
      &:nth-child(3) {
        transform: rotate(0deg);
        transition: ease-in 0.2s;
      }

      &:after {
        width: 0;
      }
    }
  }

  @include tablet {
    display: none;
  }
}

@keyframes slideDown {
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
}

@keyframes slideUp {
  from {
    height: 100%;
  }

  to {
    height: 0%;
  }
}
</style>
