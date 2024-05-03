"use client";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Вход <span className="text-blue-500">ChatApp</span>
          <form className="flex flex-col gap-y-2">
            <FormInput
              id="username"
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
            <Link
              href={"/signup"}
              className="text-xs hover:underline hover:text-blue-600 mt-2 inline-block text-start ml-2"
            >
              Нет аккаунта?
            </Link>
            <FormSubmit>Войти</FormSubmit>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default LoginPage;
