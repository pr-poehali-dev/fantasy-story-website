import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [comments, setComments] = useState([
    { id: 1, author: 'Странник', text: 'Потрясающий мир! Жду продолжения...', date: '21 окт 2025' },
    { id: 2, author: 'Маг тени', text: 'Персонажи очень глубокие и живые', date: '20 окт 2025' }
  ]);
  const [newComment, setNewComment] = useState('');

  const characters = [
    {
      name: 'Элариан',
      role: 'Хранитель древних знаний',
      description: 'Могущественный маг, владеющий забытыми заклинаниями. Его глаза светятся пурпурным светом магии.',
      image: 'https://cdn.poehali.dev/projects/7d27d83e-6907-4f66-8b43-15f496a5d7b0/files/62a1763f-f8c7-4c63-8455-163cb8411dd6.jpg'
    },
    {
      name: 'Тень',
      role: 'Таинственный странник',
      description: 'Никто не видел его лица под капюшоном. Говорят, он приходит из мира между мирами.',
      image: 'https://cdn.poehali.dev/projects/7d27d83e-6907-4f66-8b43-15f496a5d7b0/files/1a8bcba5-511b-4315-a44c-276b3e96b970.jpg'
    }
  ];

  const worlds = [
    {
      name: 'Храм Забытых Богов',
      description: 'Древнее святилище, окутанное магическим туманом. Руны на стенах мерцают пурпурным светом, открывая путь лишь достойным.',
      image: 'https://cdn.poehali.dev/projects/7d27d83e-6907-4f66-8b43-15f496a5d7b0/files/88088ade-39a0-41eb-87bb-15566801ba45.jpg',
      danger: 'Высокая'
    }
  ];

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        {
          id: comments.length + 1,
          author: 'Гость',
          text: newComment,
          date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })
        },
        ...comments
      ]);
      setNewComment('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/7d27d83e-6907-4f66-8b43-15f496a5d7b0/files/1a8bcba5-511b-4315-a44c-276b3e96b970.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glow">Хроники Тени</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Там, где свет встречается с тьмой, рождаются легенды
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
            <TabsTrigger value="story" className="text-lg">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Рассказ
            </TabsTrigger>
            <TabsTrigger value="characters" className="text-lg">
              <Icon name="Users" size={20} className="mr-2" />
              Персонажи
            </TabsTrigger>
            <TabsTrigger value="world" className="text-lg">
              <Icon name="Map" size={20} className="mr-2" />
              Мир
            </TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="animate-fade-in">
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-3xl">Пролог: Тени прошлого</CardTitle>
                <CardDescription>Глава I</CardDescription>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  Туман стелился по древним руинам, скрывая тайны забытых веков. Элариан стоял у входа в Храм Забытых Богов, 
                  чувствуя, как магия пульсирует в камнях под его ногами. Руны на стенах начали светиться — храм узнал хранителя.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  «Ты вернулся», — прошептал голос из тьмы. Из тумана материализовалась фигура в тёмном капюшоне. 
                  Тень. Элариан узнал его, хотя они никогда не встречались прежде.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  «Врата между мирами слабеют, — продолжил странник. — То, что было запечатано, просыпается. 
                  И только мы можем остановить надвигающуюся тьму».
                </p>
                <p className="text-lg leading-relaxed italic text-primary">
                  Так началось путешествие, которое изменит судьбы обоих миров...
                </p>
              </CardContent>
            </Card>

            <div className="mt-8">
              <Card className="card-glow">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} />
                    Комментарии
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Поделитесь вашими мыслями о рассказе..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <Button onClick={handleAddComment} className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить комментарий
                    </Button>
                  </div>

                  <div className="space-y-4 mt-6">
                    {comments.map((comment) => (
                      <Card key={comment.id} className="bg-muted/50">
                        <CardContent className="pt-4">
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-semibold text-primary">{comment.author}</p>
                            <p className="text-sm text-muted-foreground">{comment.date}</p>
                          </div>
                          <p className="text-foreground">{comment.text}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="characters" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {characters.map((character, index) => (
                <Card key={index} className="overflow-hidden card-glow hover:animate-glow-pulse transition-all">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${character.image})` }} />
                  <CardHeader>
                    <CardTitle className="text-2xl">{character.name}</CardTitle>
                    <CardDescription className="text-secondary">{character.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{character.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="world" className="animate-fade-in">
            <div className="space-y-6">
              {worlds.map((world, index) => (
                <Card key={index} className="overflow-hidden card-glow">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-80 bg-cover bg-center" style={{ backgroundImage: `url(${world.image})` }} />
                    <div className="md:w-1/2">
                      <CardHeader>
                        <CardTitle className="text-3xl">{world.name}</CardTitle>
                        <div className="flex items-center gap-2 text-secondary">
                          <Icon name="AlertTriangle" size={18} />
                          <span>Опасность: {world.danger}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground text-lg leading-relaxed">{world.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="border-t border-border py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Хроники Тени. Все права защищены магией.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
