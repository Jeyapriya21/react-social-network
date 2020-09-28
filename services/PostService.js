export default class PostService {
    posts = [
        {
            content: 'Salut je bois un verre au starbucks',
            user_id: 2,
            likes: 0
        },
        {
            content: 'Je me promene dans le parc',
            user_id: 1,
            likes: 0
        },
        {
            content: 'Je suis heureux',
            user_id: 2,
            likes: 4
        },
        {
            content: 'Super, nous avons un beau cadeaux',
            user_id: 2,
            likes: 0
        }
    ]

    list() {
        return this.posts;
    }

    get(post_id) {
        return this.posts[post_id];
    }

    create(user_id, content) {
        const nouveauPost = {
            content: content,
            user_id: user_id,
            likes: 0
        }
        this.posts.push(nouveauPost);
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