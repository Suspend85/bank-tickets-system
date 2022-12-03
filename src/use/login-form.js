import { useField, useForm, useResetForm } from 'vee-validate';
import * as yup from 'yup';
import { computed, watch } from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

export function useLoginForm() {
	const store = useStore()
	const router = useRouter()
	const {handleSubmit, isSubmitting, submitCount} = useForm()
	const {value:email, errorMessage: eError, handleBlur: eBlur} = useField(
		'email',
		yup
		.string()
		.trim()
		.required('Please, enter email')
		.email('Enter correct email')

	)

	const MIN_LEN = 6

	const {value:password, errorMessage: pError, handleBlur: pBlur} = useField(
		'passord',
		yup
		.string()
		.trim()
		.required('Please, enter password')
		.min(MIN_LEN, `Min length must be ${MIN_LEN} chars. Now ${'fff'}`)

	)

	const isTooManyAttempts = computed(()=>  submitCount.value >= 3)
	watch(isTooManyAttempts, val => {
		if (val) {
			setTimeout(()=> submitCount.value = 0, 1500)
		}
	})

	const onSubmit = handleSubmit (async values => {
		console.log('Form', values);
		await store.dispatch('auth/login', values)
		router.push('/')
	})

	return {
		email,
		password,
		eError,
		pError,
		eBlur,
		pBlur,
		onSubmit,
		isSubmitting,
		isTooManyAttempts
	}
}