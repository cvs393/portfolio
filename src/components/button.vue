<style>
	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 4px;
		border: 0;
		box-shadow: inset 0 0 0 1px #f12e27;
		color: #8b1606 !important;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 300;
		height: 2.75rem;
		letter-spacing: 0.2rem;
		line-height: 2.75rem;
		outline: 0;
		padding: 0 1.25rem 0 1.35rem;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
        white-space: nowrap;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		button:hover,
		.button:hover {
            background-color: #f12e27;
			/*box-shadow: inset 0 0 0 1px 	#696c65;*/
			
		color: 	#474b41 !important;
		}
		a {
			color:#f12e27;
		}
		a:hover {
			color:#696c65;
			text-decoration: line-through;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		button:active,
		.button:active {
			background-color: #8b1606;
		}

		input[type="submit"].icon:before,
		input[type="reset"].icon:before,
		input[type="button"].icon:before,
		button.icon:before,
		.button.icon:before {
			margin-right: 0.5em;
		}

		input[type="submit"].fit,
		input[type="reset"].fit,
        input[type="button"].fit,
		button.fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		button.small,
		.button.small {
			font-size: 0.6rem;
			height: 2.0625rem;
			line-height: 2.0625rem;
		}

		input[type="submit"].primary,
		input[type="reset"].primary,
		input[type="button"].primary,
		button.primary,
		.button.primary {
			background-color: #ffffff;
			color: #1b1f22 !important;
			font-weight: 600;
		}

		input[type="submit"].disabled, input[type="submit"]:disabled,
		input[type="reset"].disabled,
		input[type="reset"]:disabled,
		input[type="button"].disabled,
		input[type="button"]:disabled,
		button.disabled,
		button:disabled,
		.button.disabled,
		.button:disabled {
			pointer-events: none;
			cursor: default;
			opacity: 0.25;
		}

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button {
		line-height: calc(2.75rem - 2px);
	}

	.button a {
		color: #474b41;
	}

	.button a:hover{
		color: #474b41;
		text-decoration: none;
	}

</style>