import * as React from 'react';
import './index.scss';

interface IInfoPageProps {
    onClose: () => void;
    isVisible: boolean;
}

declare const HASH_ID: string;

export class InfoPage extends React.Component<IInfoPageProps> {
    public render() {
        const email = 'cherebedov.sergey@gmail.com';
        const github = 'https://github.com/scherebedov/interslavic';
        const source = 'http://steen.free.fr/interslavic/dynamic_dictionary.html';
        const sourceEmail = 'wenedyk@yahoo.co.uk';
        const sourceName = 'Jan van Steenbergen';
        const tableUrl = 'https://docs.google.com/spreadsheets/d/14b7B41A847_PDD6S3dFBOVBIkt_Cdxnt1m4e6NjrWP0/edit?usp=sharing';

        return (
            <div className={'card infoPage' + (this.props.isVisible ? ' show' : '')}>
                <img src={'logo.png'} className={'card-img shadow'} alt={'logo'}/>
                <div className={'card-body'}>
                    <h5 className={'card-title'}>Info page</h5>
                    <div className={'card-text'}>
                        <hr/>
                        Using dictionary from <a target={'_blank'} href={source}>{source}</a>
                        <p>Author of Interslavic/English dictionary:</p>
                        <a href={`email:${sourceEmail}`}>{sourceName}&nbsp;({sourceEmail})</a>
                        <hr/>
                        <a target={'_blank'} href={tableUrl}>Table with translations</a>
                        <hr/>
                        <p>Developer</p>
                        <a target={'_blank'} href={`email:${email}`}>{email}</a>
                        <hr/>
                        Source code (Github) <a target={'_blank'} href={github}>{github}</a>
                        <hr/>
                    </div>
                    <button
                        type={'button'}
                        className={'btn btn-primary shadow'}
                        onClick={() => this.props.onClose()}
                    >
                        Go back
                    </button>
                    <p className={'fixed-bottom text-muted buildHash'}>{HASH_ID}</p>
                </div>
            </div>
        );
    }
}
