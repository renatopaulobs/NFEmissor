import { FormlyFieldConfig } from '@ngx-formly/core';

export class AuthenticationModel {
    username: string;
    password: string;

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'username',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Usuário',
                    placeholder: 'Usuário',
                    required: true,
                    minLength: 6
                },
                validation: {
                    messages: {
                        required: 'Usuário obrigatório',
                        minlength: (err) => {
                            return `O nome deve conter ao menos ${err.requiredLength} caracteres`;
                        },
                    }
                }
            },
            {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Senha',
                    placeholder: 'Senha',
                    required: true,
                    minLength: 6
                },
                validation: {
                    messages: {
                        required: 'Senha obrigatória',
                        minlength: (err) => {
                            return `A senha deve conter ao menos ${err.requiredLength} caracteres`;
                        },
                    }
                }
            }
        ];
    }
}
