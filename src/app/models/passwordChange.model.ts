import { FormlyFieldConfig } from '@ngx-formly/core';

export class PasswordChangeModel {
    oldPassword: string;
   newPassword: string;
    confirmNewPassword: string;

    formFields() {
        return <FormlyFieldConfig[]>[
            {
                key: 'oldPassword',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Senha Atual',
                    placeholder: 'Senha Atual',
                    required: true,
                    minLength: 6
                },
                validation: {
                    messages: {
                        required: 'Senha obrigatório',
                        minlength: (err) => {
                            return `A senha deve conter ao menos ${err.requiredLength} caracteres`;
                        },
                    }
                }
            },
            {
                key: 'newPassword',
                type: 'input',
                templateOptions: {
                    type: 'newPassword',
                    label: 'Nova Senha',
                    placeholder: 'Nova Senha',
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
            },
            {
                key: 'confirmNewPassword',
                type: 'input',
                templateOptions: {
                    type: 'confirmNewPassword',
                    label: 'Confirmação de Senha',
                    placeholder: 'Confirmação de Senha',
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
