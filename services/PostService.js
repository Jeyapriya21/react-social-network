export default class PostService {
    posts = [
        {
            id: 1,
            content: 'Réunion sur la sécurité dans 15 min dans la salle 202',
            user_id: 2,
            likes: 0
        },
        {
            id: 2,
            content: 'Appel du client McLaren pour demande de confirmation technique',
            user_id: 1,
            likes: 0
        },
        {
            id: 3,
            content: 'Investissement accepté pour McLaren',
            user_id: 2,
            likes: 4
        },
        {
            id: 4,
            content: 'Réunion des mesures sanitaires en cours pour les intéressés (203)',
            user_id: 2,
            likes: 0
        }
    ]

    list(userId) {
        return this.posts.filter(post => post.user_id == userId);
    }

    get(post_id) {
        const matchingPosts = this.posts.filter(post => post.id == post_id);
        return matchingPosts.length > 0 ? matchingPosts[0] : null;
    }

    create(user_id, content) {
        if (user_id <= 0 || !content || content == '') {
            return;
        }

        const nouveauPost = {
            content: content,
            user_id: user_id,
            likes: 0
        }
        this.posts.unshift(nouveauPost);
    }

    /**
     * 
     * key = "content", "likes"
     */
    update(post_id, key, value) {
        const post = this.get(post_id);
        post[key] = value;
    }
}