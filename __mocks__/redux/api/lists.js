import { listsFromServer } from '../../data/listData';

export function getLists () {
    console.log('MOCK get lists api');
    return new Promise((resolve) => {
        process.nextTick(() => {
            resolve(listsFromServer);
        });
    });
}

// createComment = (commentableType, commentableId, data, headers) => {
    //     return new Promise((resolve) => {
    //         process.nextTick(() => {
    //             if (commentableType && commentableId && data && headers) {
    //                 resolve({headers, data: { comment: oneComment }});
    //             } else {
    //                 resolve({error: 'Error'});
    //             }
    //         });
    //     });
    // };
    // updateComment = (commentableType, commentableId, commentId, data, headers) => {
    //     return new Promise((resolve) => {
    //         process.nextTick(() => {
    //             if (commentableType && commentableId && commentId && data && headers) {
    //                 resolve({headers, data: { comment: oneComment }});
    //             } else {
    //                 resolve({error: 'Error'});
    //             }
    //         });
    //     });
    // };
    // deleteComment = (commentableType, commentableId, commentId, headers) => {
    //     return new Promise((resolve) => {
    //         process.nextTick(() => {
    //             if (commentableType && commentableId && commentId && headers) {
    //                 resolve({headers});
    //             } else {
    //                 resolve({error: 'Error'});
    //             }
    //         });
    //     });
    // }
