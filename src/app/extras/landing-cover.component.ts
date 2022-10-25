import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-cover',
  template: `
  <section class="d-flex h-100 text-center text-white bg-dark">
    
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Features</a>
            <a class="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
    
      <main class="px-3">
        <h1>Cover your page.</h1>
        <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
        </p>
      </main>
    
      <footer class="mt-auto text-white-50">
        <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
      </footer>
    </div>
    
    
        
      </section>
  `,
  styles: [`

$color_1: #333;
$color_2: rgba(255, 255, 255, .5);
$color_3: #fff;
$background-color_1: transparent;
$border-bottom-color_1: rgba(255, 255, 255, .25);
$border-bottom-color_2: #fff;

/* You can add global styles to this file, and also import other style files */
/*
 * Globals
 */
/* Custom default button */
/*
 * Base structure
 */
/*
 * Header
 */
.btn-secondary {
	color: $color_1;
	text-shadow: none;
	&:hover {
		color: $color_1;
		text-shadow: none;
	}
	&:focus {
		color: $color_1;
		text-shadow: none;
	}
}
section {
	text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
	box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
  height: 977px !important;
}
.cover-container {
	max-width: 42em;
}
.nav-masthead {
	.nav-link {
		padding: .25rem 0;
		font-weight: 700;
		color: $color_2;
		background-color: $background-color_1;
		border-bottom: .25rem solid transparent;
		&:hover {
			border-bottom-color: $border-bottom-color_1;
		}
		&:focus {
			border-bottom-color: $border-bottom-color_1;
		}
		+ {
			.nav-link {
				margin-left: 1rem;
			}
		}
	}
	.active {
		color: $color_3;
		border-bottom-color: $border-bottom-color_2;
	}
}

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

  `
  ]
})
export class LandingCoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
