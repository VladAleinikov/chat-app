"use client"

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import Link from "next/link";
import { GenderSelect } from "./_components/gender-select";
import { useLazySignupQuery } from "@/lib/auth/auth.api";

const SignupPage = () => {
  const [signup, { }] = useLazySignupQuery();
  const onSubmit = (formData: FormData) => {
    const fullName = formData.get("fullName") as string;
    const userName = formData.get("userName") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const gender = formData.get("gender") as "male" | "female";

    signup({
      fullName,
      userName,
      password,
      confirmPassword,
      gender
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Регистрация <span className="text-blue-500">ChatApp</span>
          <form action={onSubmit} className="flex flex-col gap-y-2">
            <FormInput
              id="fullName"
              label="Полниое имя"
              placeholder="Введите полное имя"
              required={true}
            />
            <FormInput
              id="userName"
              label="Имя пользователя"
              placeholder="Введите имя пользователя"
              required={true}
            />
            <FormInput
              id="password"
              label="Пароль"
              placeholder="Введите пароль"
              required={true}
              type="password"
            />
            <FormInput
              id="confirmPassword"
              label="Подтвердите пароль"
              placeholder="Введите пароль ещё раз"
              required={true}
              type="password"
            />
            <GenderSelect />
            <Link
              href={"/login"}
              className="text-xs hover:underline hover:text-blue-600 mt-2 inline-block text-start ml-2"
            >
              Уже есть аккаунт?
            </Link>
            <FormSubmit>Войти</FormSubmit>
          </form>
        </h1>
      </div>
    </div>
  );
}

export default SignupPage