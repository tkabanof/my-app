import {Form, Field} from 'react-final-form'

const MyInfoForm = (props) => {

    const setObj = (val) => {
        return typeof val !== "undefined" ? val : null
    }

    const onSubmit = values => {

        let req = {
            userId: null,
            lookingForAJob: !values.employed,
            fullName: setObj(values.fullName),
            aboutMe: "test",
            lookingForAJobDescription: setObj(values.lookingForAJobDescription),
            contacts: {
                github: setObj(values.github),
                vk: setObj(values.vk),
                facebook: setObj(values.facebook),
                instagram: setObj(values.instagram),
                twitter: setObj(values.twitter),
                website: setObj(values.website),
                youtube: setObj(values.youtube),
                mainLink: setObj(values.mainLink)
            }
        }
        props.updateMyInfo(req);
    }

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{employed: true}}
            render={({handleSubmit, form, submitting, pristine, values}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Имя</label>
                        <Field
                            name="fullName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>FaceBook</label>
                        <Field
                            name="facebook"
                            component="input"
                            type="text"
                            placeholder="facebook.com"
                        />
                    </div>
                    <div>
                        <label>Github</label>
                        <Field
                            name="github"
                            component="input"
                            type="text"
                            placeholder="github.com"
                        />
                    </div>
                    <div>
                        <label>vk</label>
                        <Field
                            name="vk"
                            component="input"
                            type="text"
                            placeholder="vk.com"
                        />
                    </div>
                    <div>
                        <label>instagram</label>
                        <Field
                            name="instagram"
                            component="input"
                            type="text"
                            placeholder="instagram.com"
                        />
                    </div>
                    <div>
                        <label>twitter</label>
                        <Field
                            name="twitter"
                            component="input"
                            type="text"
                            placeholder="twitter.com"
                        />
                    </div>
                    <div>
                        <label>website</label>
                        <Field
                            name="website"
                            component="input"
                            type="text"
                            placeholder="website.com"
                        />
                    </div>
                    <div>
                        <label>youtube</label>
                        <Field
                            name="youtube"
                            component="input"
                            type="text"
                            placeholder="youtube.com"
                        />
                    </div>
                    <div>
                        <label>mainLink</label>
                        <Field
                            name="mainLink"
                            component="input"
                            type="text"
                            placeholder="@mainLink.com"
                        />
                    </div>
                    <div>
                        <label>Устроен</label>
                        <Field name="employed" component="input" type="checkbox"/>
                    </div>

                    <div>
                        <label>Описание предпочитаемой работы</label>
                        <Field name="lookingForAJobDescription" component="textarea" placeholder="Notes"/>
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )}
        />)
}

export default MyInfoForm;